"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, MessageSquare, Clock } from "lucide-react"

interface Chat {
  id: string
  name: string
  aiType: string
  createdAt: string
  messageCount: number
  lastMessage?: string
}

const mockChats: Chat[] = [
  {
    id: "1",
    name: "Помощник по программированию",
    aiType: "GPT-4",
    createdAt: "2025-12-30",
    messageCount: 45,
    lastMessage: "Как мне оптимизировать этот код?",
  },
  {
    id: "2",
    name: "Творческий ассистент",
    aiType: "Claude",
    createdAt: "2025-12-28",
    messageCount: 23,
    lastMessage: "Давай придумаем название для проекта",
  },
  {
    id: "3",
    name: "Бизнес консультант",
    aiType: "GPT-4o",
    createdAt: "2025-12-25",
    messageCount: 67,
    lastMessage: "Анализ конкурентов завершен",
  },
  {
    id: "4",
    name: "Учитель языков",
    aiType: "Gemini",
    createdAt: "2025-12-20",
    messageCount: 112,
    lastMessage: "Отличная практика сегодня!",
  },
  {
    id: "5",
    name: "Помощник по дизайну",
    aiType: "Grok",
    createdAt: "2025-12-15",
    messageCount: 34,
    lastMessage: "Посмотри эти цветовые палитры",
  },
]

const aiTypeColors: Record<string, string> = {
  "GPT-4": "bg-primary text-primary-foreground",
  Claude: "bg-chart-2 text-primary-foreground",
  "GPT-4o": "bg-chart-3 text-foreground",
  Gemini: "bg-chart-4 text-primary-foreground",
  Grok: "bg-chart-5 text-foreground",
}

export function ChatList() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "Сегодня"
    if (diffDays === 1) return "Вчера"
    if (diffDays < 7) return `${diffDays} дн. назад`

    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "short",
      year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
    })
  }

  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-balance mb-2">Мои чаты</h1>
        <p className="text-muted-foreground text-pretty">Все ваши разговоры с ИИ-ассистентами</p>
      </div>

      <div className="flex flex-col gap-3">
        {mockChats.map((chat) => (
          <Card
            key={chat.id}
            className="p-4 transition-all hover:shadow-md hover:scale-[1.01] cursor-pointer border-border bg-card"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="size-5 text-primary shrink-0" />
                  <h3 className="font-semibold text-card-foreground truncate">{chat.name}</h3>
                </div>

                {chat.lastMessage && <p className="text-sm text-muted-foreground truncate mb-3">{chat.lastMessage}</p>}

                <div className="flex items-center gap-3 flex-wrap">
                  <Badge
                    className={`${aiTypeColors[chat.aiType] || "bg-secondary text-secondary-foreground"} text-xs font-medium`}
                  >
                    {chat.aiType}
                  </Badge>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MessageSquare className="size-3" />
                    <span>{chat.messageCount}</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="size-3" />
                    <span>{formatDate(chat.createdAt)}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
