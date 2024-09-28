interface UserRequisites {
  dimensions: string;
  budget: string;
  energy: string;
}

interface SystemConfig {
  megapack2xls: string;
  megapack2s: string;
  megapacks: string;
  powerpacks: string;
  transformers: string;
}

export type { UserRequisites, SystemConfig };
