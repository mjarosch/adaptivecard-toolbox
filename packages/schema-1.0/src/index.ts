export type SchemaVersion = "1.0";

// Utility & Bases
export interface IElement {
    id?: string;
    separator?: boolean;
    spacing?: Spacing;
}

export interface IAction {
    id?: string;
    title?: string;
}

export interface IInput {
    id: string;
    separator?: boolean;
    spacing?: Spacing;
}

export type Elements = ITextBlock | IImage | IContainer | IColumnSet | IFactSet | IImageSet | ITextInput | INumberInput | IDateInput | ITimeInput | IToggleInput | IChoiceSetInput;

export type Actions = IOpenUrlAction | ISubmitAction | IShowCardAction;

// Enum values
export enum ChoiceInputStyle {
    Compact = "compact",
    Expanded = "expanded",
}

export enum ContainerStyle {
    Default = "default",
    Emphasis = "emphasis",
}

export enum HorizontalAlignment {
    Center = "center",
    Left = "left",
    Right = "right",
}

export enum ImageSize {
    Large = "large",
    Medium = "medium",
    Small = "small",
}

export enum ImageStyle {
    Default = "default",
    Person = "person",
}    

export enum Spacing {
    Default = "default",
    ExtraLarge = "extraLarge",
    Large = "large",
    Medium = "medium",
    None = "none",
    Padding = "padding",
    Small = "small",        
}

export enum TextColor {
    Accent = "accent",
    Attention = "attention",
    Dark = "dark",
    Default = "default",
    Good = "good",
    Light = "light",
    Warning = "warning",
}

export enum TextSize {
    Default = "default",
    ExtraLarge = "extraLarge",
    Large = "large",
    Medium = "medium",
    Small = "small",
}

export enum TextWeight {
    Bolder = "bolder",
    Default = "default",
    Lighter = "lighter",
}

// Cards
export interface IAdaptiveCard {
    type: "AdaptiveCard";
    version: SchemaVersion;
    fallbackText?: string;
    backgroundImage?: string;
    body?: Elements[];
    actions?: Actions[];
    speak?: string;
    lang?: string;
    $schema?: "http://adaptivecards.io/schemas/adaptive-card.json";
}

// Card Elements
export interface IImage extends IElement {
    type: "Image";
    url: string;
    altText?: string;
    horizontalAlignment?: HorizontalAlignment;
    size?: ImageSize;
    style?: ImageStyle;
}

export interface ITextBlock extends IElement {
    type: "TextBlock";
    text: string;
    color?: TextColor;
    horizontalAlignment?: HorizontalAlignment;
    isSubtle?: boolean;
    maxLines?: number;
    size?: TextSize;
    weight?: TextWeight;
    wrap?: boolean;
}

// Containers
export interface IContainer extends IElement {
    type: "Container";
    items: Elements[];
    style?: ContainerStyle;
}

export interface IColumnSet extends IElement {
    type: "ColumnSet";
    columns: IColumn[];
    horizontalAlignment?: HorizontalAlignment;
}

export interface IColumn {
    type: "Column";
    items: Elements[];
    id?: string;
    style?: ContainerStyle;
    width?: "auto" | "stretch" | string | number;
}

export interface IFactSet extends IElement {
    type: "FactSet";
    facts: IFact[];
}

export interface IFact {
    title: string;
    value: string;
}

export interface IImageSet extends IElement {
    type: "ImageSet";
    images: IImage[];
    imageSize?: ImageSize;
}

// Actions
export interface IOpenUrlAction extends IAction {
    type: "Action.OpenUrl";
    url: string;
}

export interface ISubmitAction extends IAction {
    type: "Action.Submit";
    data?: string | { [propName: string]: any; };
}

// Version is optional for ShowCard Actions
export interface IShowableCard extends Omit<IAdaptiveCard, "version"> {
    version?: SchemaVersion;
}

export interface IShowCardAction extends IAction {
    type: "Action.ShowCard";
    card?: IShowableCard;
}

// Inputs
export interface ITextInput extends IInput {
    type: "Input.Text";
    isMultiline?: boolean;
    maxLength?: number;
    placeholder?: string;
    value?: string;
}

export interface INumberInput extends IInput {
    type: "Input.Number";
    max?: number;
    min?: number;
    placeholder?: string;
    value?: string;
}

export interface IDateInput extends IInput {
    type: "Input.Date";
    max?: string;
    min?: string;
    placeholder?: string;
    value?: string;
}

export interface ITimeInput extends IInput {
    type: "Input.Time";
    max?: string;
    min?: string;
    placeholder?: string;
    value?: string;
}

export interface IToggleInput extends IInput {
    type: "Input.Toggle";
    title: string;
    value?: string;
    valueOff?: string;
    valueOn?: string;
}

export interface IChoiceSetInput extends IInput {
    type: "Input.ChoiceSet";
    title: string;
    choices?: IChoice[];
    isMultiSelect?: boolean;
    style?: ChoiceInputStyle;
    value?: string;
    placeholder?: string;
}

export interface IChoice {
    title: string;
    value: string;
}
