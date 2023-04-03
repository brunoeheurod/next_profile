import { Breakpoints } from '@skynexui/responsive_stylesheet';

type ResponsiveProperty<T> = Partial<Record<Breakpoints, T>>;

export default interface StyleSheet {
  fontFamily?: ResponsiveProperty<string> | string;
  [ket: string]: any;
}
