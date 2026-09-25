import { businessData } from "@/data/business";
import { MessageCircle } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/Button";

export function WhatsAppButton(props: Omit<ButtonProps, "children">) {
  return (
    <Button asChild variant="outline" className="text-green-600 border-green-600 hover:bg-green-50" {...props}>
      <a href={`https://wa.me/${businessData.whatsapp}`} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-4 h-4 mr-2" />
        {props.title || "WhatsApp"}
      </a>
    </Button>
  );
}
