interface UserRequisites {
  dimensions: string | null;
  budget: string | null;
  energy: string | null;
}

interface SystemConfig {
  megapack2xls: string | null;
  megapack2s: string | null;
  megapacks: string | null;
  powerpacks: string | null;
  transformers: string | null;
}

export type { UserRequisites, SystemConfig };
