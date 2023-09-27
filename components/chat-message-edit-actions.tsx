'use client'

import { type Message } from 'ai'

import { Button, ButtonProps } from '@/components/ui/button'

interface ChatMessageEditActionsProps {
  saveButtonProps: ButtonProps
  onSave: () => void
  onCancel: () => void
}

export function ChatMessageEditActions({
  saveButtonProps,
  onSave,

  onCancel
}: ChatMessageEditActionsProps) {
  return (
    <div className="flex justify-center">
      <Button {...saveButtonProps} variant="default" onClick={onSave}>
        Save
      </Button>
      <Button className="ml-4" variant="secondary" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  )
}
