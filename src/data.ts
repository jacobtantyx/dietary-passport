import { Allergen, DietType } from './types';
import { Wheat, Fish, Egg, Milk, Bean, Trees, Shell, Cookie, Ruler, KeyboardMusic, Flame, Church, LucidePin } from 'lucide-react';

export const allergens: Allergen[] = [
  {
    id: 'gluten',
    nameEn: 'Cereals containing gluten',
    nameZh: '含麸质谷物',
    icon: Wheat,
    examples: {
      en: ['Wheat', 'Rye', 'Barley', 'Oats'],
      zh: ['小麦', '黑麦', '大麦', '燕麦'],
    },
  },
  {
    id: 'fish',
    nameEn: 'Fish',
    nameZh: '鱼类',
    icon: Fish,
    examples: {
      en: ['All types of fish', 'Fish sauce', 'Fish paste'],
      zh: ['所有鱼类', '鱼露', '鱼酱'],
    },
  },
  {
    id: 'eggs',
    nameEn: 'Eggs',
    nameZh: '蛋类',
    icon: Egg,
    examples: {
      en: ['Chicken eggs', 'Duck eggs', 'Quail eggs'],
      zh: ['鸡蛋', '鸭蛋', '鹌鹑蛋'],
    },
  },
  {
    id: 'dairy',
    nameEn: 'Dairy',
    nameZh: '乳制品',
    icon: Milk,
    examples: {
      en: ['Milk', 'Cheese', 'Yogurt', 'Butter'],
      zh: ['牛奶', '奶酪', '酸奶', '黄油'],
    },
  },
  {
    id: 'peanuts',
    nameEn: 'Peanuts',
    nameZh: '花生',
    icon: Bean,
    examples: {
      en: ['Peanuts', 'Peanut butter', 'Peanut oil'],
      zh: ['花生', '花生酱', '花生油'],
    },
  },
  {
    id: 'soybeans',
    nameEn: 'Soybeans',
    nameZh: '大豆',
    icon: Bean,
    examples: {
      en: ['Soybeans', 'Tofu', 'Soy sauce'],
      zh: ['大豆', '豆腐', '酱油'],
    },
  },
  {
    id: 'tree_nuts',
    nameEn: 'Tree nuts',
    nameZh: '坚果',
    icon: Trees,
    examples: {
      en: ['Almonds', 'Walnuts', 'Cashews'],
      zh: ['杏仁', '核桃', '腰果'],
    },
  },
  {
    id: 'shellfish',
    nameEn: 'Shellfish',
    nameZh: '贝类',
    icon: Shell,
    examples: {
      en: ['Shrimp', 'Crab', 'Lobster'],
      zh: ['虾', '蟹', '龙虾'],
    },
  },
  {
    id: 'molluscs',
    nameEn: 'Molluscs',
    nameZh: '软体动物',
    icon: Cookie,
    examples: {
      en: ['Oysters', 'Mussels', 'Squid'],
      zh: ['牡蛎', '贻贝', '鱿鱼'],
    },
  },
  {
    id: 'celery',
    nameEn: 'Celery',
    nameZh: '芹菜',
    icon: Ruler,
    examples: {
      en: ['Celery stalks', 'Celery seeds', 'Celery salt'],
      zh: ['芹菜茎', '芹菜籽', '芹菜盐'],
    },
  },
  {
    id: 'mustard',
    nameEn: 'Mustard',
    nameZh: '芥末',
    icon: KeyboardMusic,
    examples: {
      en: ['Mustard seeds', 'Mustard sauce', 'Mustard powder'],
      zh: ['芥菜籽', '芥末酱', '芥末粉'],
    },
  },
  {
    id: 'sesame',
    nameEn: 'Sesame',
    nameZh: '芝麻',
    icon: Flame,
    examples: {
      en: ['Sesame seeds', 'Sesame oil', 'Tahini'],
      zh: ['芝麻', '芝麻油', '芝麻酱'],
    },
  },
  {
    id: 'sulphites',
    nameEn: 'Sulphur dioxide & sulphites',
    nameZh: '二氧化硫和亚硫酸盐',
    icon: Church,
    examples: {
      en: ['Dried fruits', 'Wine', 'Processed foods'],
      zh: ['干果', '葡萄酒', '加工食品'],
    },
  },
  {
    id: 'lupin',
    nameEn: 'Lupin',
    nameZh: '羽扇豆',
    icon: LucidePin,
    examples: {
      en: ['Lupin flour', 'Lupin seeds', 'Some breads'],
      zh: ['羽扇豆粉', '羽扇豆籽', '某些面包'],
    },
  },
];

export const dietTypes: Record<DietType, { nameEn: string; nameZh: string; descriptionEn: string; descriptionZh: string }> = {
  no_restrictions: {
    nameEn: 'No Restrictions',
    nameZh: '无限制',
    descriptionEn: 'I eat everything',
    descriptionZh: '我可以吃任何食物',
  },
  vegetarian: {
    nameEn: 'Vegetarian',
    nameZh: '素食',
    descriptionEn: 'No meat, fish, or seafood',
    descriptionZh: '不吃肉类、鱼类和海鲜',
  },
  vegan: {
    nameEn: 'Vegan',
    nameZh: '纯素',
    descriptionEn: 'No animal products at all',
    descriptionZh: '不吃任何动物产品',
  },
  lacto_ovo: {
    nameEn: 'Lacto-Ovo Vegetarian',
    nameZh: '蛋奶素',
    descriptionEn: 'No meat, fish, or seafood, but I eat eggs and dairy',
    descriptionZh: '不吃肉类、鱼类和海鲜，但可以吃蛋和奶制品',
  },
};