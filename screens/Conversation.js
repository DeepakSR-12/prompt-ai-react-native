import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { MessageSquare } from "lucide-react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import Heading from "../components/Heading";
import Empty from "../components/Empty";

export const formSchema = z.object({
  prompt: z.string().min(1, { message: "Prompt is required" }),
});

export default function Conversation() {
  const [messages, setMessages] = useState([]);
  const {
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async ({ prompt }) => {
    try {
      const userMessage = {
        role: "user",
        content: prompt,
      };

      const newMessages = [...messages, userMessage];
      // const response = await axios.post("/api/conversation", {
      //   messages: newMessages,
      // });

      // setMessages((current) => [...current, userMessage, response.data]);
      // form.reset();
      console.log({ userMessage });
    } catch (error) {
      // if (error?.response?.status === 403) {
      //   proModal.onOpen();
      // } else {
      //   toast.error("Something went wrong.");
      // }
    } finally {
      // router.refresh();
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <Heading
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessageSquare}
        bgColor="bg-violet-500/10"
        color="text-violet-500"
      />

      <View className="flex-1 px-4">
        <View className="rounded-lg border w-full p-4 gap-2">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="border-0 text-xl pb-20 outline-none"
                multiline={true}
                textAlignVertical="top"
                placeholder="How do I calculate the radius of a circle?"
                onBlur={onBlur}
                disabled={isLoading}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="prompt"
          />

          {errors.prompt && (
            <Text className="text-red-700">This is required.</Text>
          )}

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            disabled={isLoading}
            className="bg-violet-500 p-4 rounded-lg"
          >
            <Text className="text-center text-white font-semibold">
              Generate
            </Text>
          </TouchableOpacity>
        </View>
        <View className="space-y-4 mt-4">
          {isLoading && (
            <View className="p-8 rounded-lg w-full bg-muted flex items-center justify-center">
              <Loader />
            </View>
          )}
          {!messages.length && !isLoading && (
            <Empty label="No conversation started!" />
          )}
          {/* <View className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <View
                key={message.content}
                className={cn(
                  "w-full p-8 flex items-start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? "border bg-white border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <PromptAIAvatar />}
                <p className="text-sm">{message.content}</p>
              </View>
            ))}
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
}
