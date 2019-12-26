import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm';

export class CustomNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {

  columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
    if (customName) { return customName; }
    return propertyName.replace(/(?:([a-z])([A-Z]))|(?:((?!^)[A-Z])([a-z]))/g, '$1_$3$2$4').toLowerCase();
  }

}
