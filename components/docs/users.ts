export interface UsersOption {
    readonly value: string;
    readonly label: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  
  export const usersOptions: readonly UsersOption[] = [
    { value: 'Charly', label: "Charly" },
    { value: 'Tommy', label: 'Tommy'},
    { value: 'Alejandro', label: 'Alejandro' },
    { value: 'Walter', label: 'Walter'},
    { value: 'Dani', label: 'Dani' },
    { value: 'Manu', label: 'Manu' },
    { value: 'Lalo', label: 'Lalo' },
    { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
    { value: 'Argentina', label: 'Argentina' },
    { value: 'Armenia', label: 'Armenia' },
  ];
  
  