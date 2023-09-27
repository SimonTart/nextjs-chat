import { type Message } from 'ai'

import { Separator } from '@/components/ui/separator'
import { ChatMessage } from '@/components/chat-message'

export interface ChatList {
  messages: Message[]
  onUpdateMessages?: (messages: Message[]) => void
  isLoading?: boolean
}

export function ChatList({
  messages,
  isLoading = false,
  onUpdateMessages
}: ChatList) {
  if (!messages.length) {
    return null
  }
  const handleUpdateMessage = (index: number, message: Message) => {
    const newMessages = messages.slice(0, index + 1)
    newMessages[index] = message
    onUpdateMessages?.(newMessages)
  }

  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage
            index={index}
            message={message}
            isLoading={isLoading}
            onUpdateMessage={handleUpdateMessage}
          />
          {index < messages.length - 1 && (
            <Separator className="my-4 md:my-8" />
          )}
        </div>
      ))}
    </div>
  )
}
