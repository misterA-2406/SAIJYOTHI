export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  isVeg: boolean;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  tags?: string[];
}

export interface MenuSection {
  id: string;
  title: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: MenuSection[] = [
  {
    id: "breakfast",
    title: "Breakfast & Tiffins",
    icon: "wb_sunny",
    items: [
      {
        id: "ghee-podi-idli",
        name: "Ghee Podi Idli",
        price: 120,
        description: "Soft idlis tossed in aromatic ghee and spicy malgapodi.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBue5Zlc3A-WBQGlYAyr7G0a28CFNZzovK2qWpVWFP2_C1yXE4IMCA0FVGVofMJNUxGMuLaqCKS_U5qWyCc23cKw5jlfRaWw5fmYMxL3kaCKwlZgojHlVq8VMs-1tb-P3KJw9rSlwnDMES3GII8HrgNHECJ_jbHQ_I7Qg0-zhBEx0i4eQbvLOeULkO3yjZXF20wPEAS3it5yLxn_Wh3Xe_P_mukCQIprkfswYTB7DfTtWLRMefJUh53DC5WEDXg4TV5RK0mmyEVg9I",
        isVeg: true,
        isBestseller: true,
      },
      {
        id: "masala-dosa",
        name: "Masala Dosa",
        price: 95,
        description: "Crispy golden crepe filled with spiced potato masala.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcHjR5Mlz7MBm_lJAB6T_hmUIuO9nt9K53mUpUZJNfMJm_PD237jFSkZMFgmQiymckVai6Lip8qPDVL8zdmESQpxRKcrrJMwleu_myELoLyUHG1bx7kO4hzGAslx81DotWEJzbuATjQv0lOHp1EaJFhpFQsvcPxAX13DSA55q8ZF1WgsUqPgibYaaDHpLKchxuDcVRrruAzDYarL-jnOGiNM1b_9l1AEjByusTUfaJtl80xndoVmnwEIF4eMIvlTBLB4dTTD6kV5U",
        isVeg: true,
      },
      {
        id: "vada",
        name: "Vada (2 pcs)",
        price: 70,
        description: "Crispy medu vada served with sambar and coconut chutney.",
        image: "", // No image provided in HTML for this one, but I'll leave it empty or use a placeholder if needed. The HTML structure had a different layout for this one (no image shown in the grid item).
        isVeg: true,
      },
      {
        id: "mysore-bajji",
        name: "Mysore Bajji",
        price: 80,
        description: "Fluffy fried dumplings made with spiced yogurt batter.",
        image: "",
        isVeg: true,
      }
    ]
  },
  {
    id: "meals",
    title: "Traditional Meals",
    icon: "flatware",
    items: [
      {
        id: "south-indian-thali",
        name: "Full South Indian Thali",
        price: 250,
        description: "A grand feast featuring Rice, Sambar, Rasam, 2 Veg Curries, Poriyal, Curd, Appalam, and a Sweet.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW9HRvP7lAYoI76ROJC56bm6nfFZu_Fw-1SyduR_TTIMwF63aDfqs5Bqvo6vmjk_BGCgaxOeB7y2KtTiij2OqGpG231_zuQ7HiMgGDjJXmF0ScDEt1wtcShXRQd87Nu7Ce9higENpRH0m5HylUwWBsCWB-aw716I1k8bQpI5cNVD5Y6UB9evk8i3tgXtsoWMW2KXnpKlmgdY2HvuoqMVUs9RZ55R0_-rU10rm_UhDO-r17v1fAtLT0qbKns4J1W9oInEdUgXP0Ph4",
        isVeg: true,
        tags: ["UNLIMITED RICE", "AUTHENTIC"]
      }
    ]
  },
  {
    id: "biryani",
    title: "Biryani Specials",
    icon: "star",
    items: [
      {
        id: "special-mutton-biryani",
        name: "Special Mutton Biryani",
        price: 420,
        description: "Tender mutton slow-cooked with long-grain basmati rice and secret spices.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtRzbj36fxoTcJKKf3Eqq2i4qTh8uOTDnbOoV_BVyC7nBVP0DjIDWNmcSDEvtl1qxMP9OV13RIIxJep4W1HMZa1gD19YbgdFVFVK2JzzYKVK8s0pdBQmGbfhLQSkFLaDShfoki612Fxm_fKml_-F4En-Q6iJM1XS4EuPK0vsvQo3D-zFLhfP__MS7Y18eztkK-6cHUWRLtM_9TQwgkpcfrNikqED__nqZxcXSuPq0zkhr6yZw56gcfANDibCcGzsBWFsDGTFKdsO4",
        isVeg: false,
        isChefSpecial: true,
      },
      {
        id: "hyderabadi-dum-biryani",
        name: "Hyderabadi Dum Biryani",
        price: 340,
        description: "Classic dum biryani with marinated chicken and aromatic rice.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCw9OLchpPPscPaFC9Jr3MkB-Jcm1rURYDayn2GturcgE8-qAK5kz-3lRx-g-m5B5A4C0vD2MSlA2OGmRcjOFs8UGUSArXqzN8G3WyC4nzrjzDAHc1-FLlwdMhCZ8NnQ7hDUZ5uSMUKzQRSZSV5omMCLTaIPmi2BIk7kZPMWqmpslRCQzPUJKaf9nx5j6O9IHiiMOlxBIDHwk6iZmDnZ5ozoGA47MIR9kd86VbHpd8PvoxfZZN8IuCP7LKECnstS-d9BbSBPdOtThs",
        isVeg: false,
      }
    ]
  },
  {
    id: "chinese",
    title: "Chinese & Starters",
    icon: "skillet",
    items: [
      {
        id: "chicken-65",
        name: "Chicken 65",
        price: 240,
        description: "Deep-fried spicy chicken morsels with curry leaves.",
        image: "",
        isVeg: false,
      },
      {
        id: "gobi-65",
        name: "Gobi 65",
        price: 180,
        description: "Crispy cauliflower florets tossed in southern spices.",
        image: "",
        isVeg: true,
      },
      {
        id: "apollo-fish",
        name: "Apollo Fish",
        price: 320,
        description: "Cubed fish fillets tempered with green chillies and curry leaves.",
        image: "",
        isVeg: false,
      }
    ]
  }
];
