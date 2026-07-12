import type { IconName } from "@/components/ui/Icon";

export interface ContactChannel {
  id: string;
  label: string;
  icon: IconName;
  lines: { text: string; href?: string }[];
  note?: string;
}

export const contactChannels: ContactChannel[] = [
  {
    id: "location",
    label: "Location",
    icon: "pin",
    lines: [
      { text: "4 Zakir Hossain Road," },
      { text: "South Khulshi, 4000 Chittagong" },
    ],
    note: "Head office & flagship outlet",
  },
  {
    id: "phone",
    label: "Call us",
    icon: "phone",
    lines: [
      {
        text: "031-614246, Ext 636193",
        href: "tel:+88031614246",
      },
    ],
    note: "Saturday – Thursday, 8 AM – 10 PM",
  },
  {
    id: "email",
    label: "Email",
    icon: "mail",
    lines: [
      { text: "info@kbakery.com.bd", href: "mailto:info@kbakery.com.bd" },
      { text: "support@kbakery.com.bd", href: "mailto:support@kbakery.com.bd" },
    ],
    note: "Orders, enquiries & customer support",
  },
];

/** Official K Bakery embed — South Khulshi corporate office (kbakery.com.bd) */
export const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6205.482962589195!2d91.80769139501382!3d22.36109464021427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc7eace4a71713ddc!2sK+Bakery!5e0!3m2!1sen!2sbd!4v1562827162555!5m2!1sen!2sbd";

export const mapOpenUrl =
  "https://www.google.com/maps/search/K+Bakery/@22.3610946,91.8076914,17z";

export const mapDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=K+Bakery,+4+Zakir+Hossain+Road,+South+Khulshi,+Chittagong";
