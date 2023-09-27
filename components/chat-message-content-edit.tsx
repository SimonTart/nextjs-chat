import { Message } from 'ai'
import { ChatMessageEditActions } from '@/components/chat-message-edit-actions'
import { useState } from 'react'

export interface ChatMessageContentEditProps {
  isLoading: boolean
  message: Message
  onCancelEditMessage: () => void
  onUpdateMessage: (message: Message) => void
}

export function ChatMessageContentEdit({
  isLoading,
  message,
  onUpdateMessage,
  onCancelEditMessage
}: ChatMessageContentEditProps) {
  const [content, setContent] = useState(message.content)
  const handleSave = () => {
    onUpdateMessage({
      ...message,
      content
    })
  }
  return (
    <div className="flex-1 px-1 ml-4 space-y-2 flex flex-col">
      <div className="flex-none">
        <textarea
          className="resize-none w-full py-1.5 px-3"
          value={content}
          onChange={e => {
            setContent(e.target.value)
          }}
        />
      </div>
      <ChatMessageEditActions
        saveButtonProps={{ disabled: isLoading }}
        onSave={handleSave}
        onCancel={onCancelEditMessage}
      />
    </div>
  )
}
