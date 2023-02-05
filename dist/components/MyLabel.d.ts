/// <reference types="react" />
import './MyLabel.css';
export interface Props {
    /**
     * Menasje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitaliza el mensaje
     */
    allCaps?: boolean;
    /**
     * Color del mensaje
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color personalizado del mensaje
     */
    fontColor?: string;
    backgroundColor?: string;
}
/**
 * Label component para interaccion con el usuario
 */
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: Props) => JSX.Element;
