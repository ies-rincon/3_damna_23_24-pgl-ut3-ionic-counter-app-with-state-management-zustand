interface TabOneViewProps {
  clickCounter: CounterStoreType["clickCounter"];
  labelClick: string;
  languageApp: LanguageStoreType["languageApp"];
}
interface CustomButtonProps {
  icon: string;
  iconName: "refresh" | "plus-one" | "exposure-minus-1";
}
