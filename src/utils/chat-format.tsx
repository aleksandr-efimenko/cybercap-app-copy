import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";

export const formatChatMembers = (
  role: "function" | "user" | "assistant" | "system"
) => {
  let formatted = <>role.toUpperCase()</>;
  if (role === "user")
    formatted = (
      <>
        <Icons.user className="h-4 w-4" />
        <Badge>You</Badge>
      </>
    );
  else if (role === "assistant")
    formatted = (
      <>
        <Icons.openapi className="h-4 w-4" />
        <Badge>AI Assistant</Badge>
      </>
    );

  return (
    <div className="flex items-center justify-center gap-4">{formatted}</div>
  );
};

export const formatChatMessage = (message: string) => {
  const formatted = message.split("\n").map((m, i) => <p key={i}>{m}</p>);
  return <div className="flex flex-col  justify-center gap-4">{formatted}</div>;
};