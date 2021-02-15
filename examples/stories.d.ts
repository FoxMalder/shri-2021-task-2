export type TemplateAlias = 'leaders' | 'vote' | 'chart' | 'diagram' | 'activity';

// участник команды
export type User = {
    id: number;
    name: string;
    avatar: string;
    valueText: string;
}

// общие поля для всех шаблонов
export type Template = {
    title: string;
    subtitle: string; // в нашем случае заголовок спринта
}

// для разметки дата атрибутов интерактивных элементов, только для 1го задания
export type ActionData = {
    templateAlias: string,
    data: {
        offset?: number;
        selectedUserId? : number;
    },
};

export type LeadersData = Template & {
    emoji: string;
    selectedUserId?: number; // если отображаются результаты голосования
    users: User[]; // упорядоченный список лидеров, 5 шт
}

export type VoteData = Template & {
    emoji: string;
    selectedUserId?: number; // участник, за которого проголосовали ранее, только для 1го задания
    offset?: number; // только для 1го задания
    users: User[]; // упорядоченный список всех участников команды
}

export type ChartData = Template & {
    values: {
        title: string;
        value: number;
        active?: boolean;
    }[]; // упорядоченные значения периодов, спринты 10шт предыдущих + текущий + 5 шт следующих
    users: User[]; // упорядоченный список лидеров, 3 шт
}

export type DiagramData = Template & {
    totalText: string; // 200 коммитов
    differenceText: string; // + 10 коммитов с прошлого спринта
    categories: {
        title: string;
        valueText: string; // 33 коммита
        differenceText: string; // +3 коммита
    }[];
}

export type ActivityData = Template & {
    data: {
        mon: number[];
        tue: number[];
        wed: number[];
        thu: number[];
        fri: number[];
        sat: number[];
        sun: number[];
    }
}

export type TemplateData = LeadersData | VoteData | ActivityData | DiagramData | ChartData;
export type StoryData = {
    alias: TemplateAlias;
    data: VoteData | ChartData | DiagramData | ActivityData | LeadersData;
}[];
