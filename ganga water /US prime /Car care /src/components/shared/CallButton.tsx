import { businessData } from "@/data/business";
import { Phone } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/Button";

export function CallButton(props: Omit<ButtonProps, "children">) {
  return (
    <Button asChild {...props}>
      <a href={`tel:${businessData.phone}`}>
        <Phone className="w-4 h-4 mr-2" />
        {props.title || "Call Now"}
      </a>
    </Button>
  );
}
