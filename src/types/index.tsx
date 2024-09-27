interface UserRequisites {
  dimensions: number | null;
  budget: number | null;
  energy: number | null;
}

interface SystemConfig {
  megapack2xls: number | null;
  megapack2s: number | null;
  megapacks: number | null;
  powerpacks: number | null;
  transformers: number | null;
}

export type { UserRequisites, SystemConfig };
