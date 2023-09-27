// Inspired by Chatbot-UI and modified to fit the needs of this project
// @see https://github.com/mckaywrigley/chatbot-ui/blob/main/components/Chat/ChatMessage.tsx
'use client'

import { Message } from 'ai'
import { useState } from 'react'

import { cn } from '@/lib/utils'
import { IconOpenAI, IconUser } from '@/components/ui/icons'
import { ChatMessageContentDisplay } from '@/components/chat-message-content-display'
import { ChatMessageContentEdit } from '@/components/chat-message-content-edit'

export interface ChatMessageProps {
  index: number
  message: Message
  isLoading: boolean
  onUpdateMessage: (index: number, message: Message) => void
}

export function ChatMessage({
  index,
  message,
  isLoading,
  onUpdateMessage,
  ...props
}: ChatMessageProps) {
  const [isEdit, setIsEdit] = useState(false)
  const [editMessage, setEditMessage] = useState<Message | null>(null)

  const handleEditMessage = (message: Message) => {
    setEditMessage(message)
    setIsEdit(true)
  }

  const handleCancelEditMessage = () => {
    setEditMessage(null)
    setIsEdit(false)
  }

  const handleUpdateMessage = (newMessage: Message) => {
    onUpdateMessage(index, newMessage)
    setEditMessage(null)
    setIsEdit(false)
  }

  return (
    <div
      className={cn('group relative mb-4 flex items-start md:-ml-12')}
      {...props}
    >
      <div
        className={cn(
          'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow',
          message.role === 'user'
            ? 'bg-background'
            : 'bg-primary text-primary-foreground'
        )}
      >
        {message.role === 'user' ? <IconUser /> : <IconOpenAI />}
      </div>
      {!isEdit && (
        <ChatMessageContentDisplay
          message={message}
          onEditMessage={handleEditMessage}
        />
      )}
      {isEdit && (
        <ChatMessageContentEdit
          isLoading={isLoading}
          message={editMessage!}
          onCancelEditMessage={handleCancelEditMessage}
          onUpdateMessage={handleUpdateMessage}
        />
      )}
    </div>
  )
}
