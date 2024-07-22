import { UserProfileForm, UserFormInputValidationErrors } from '@/reduxStore/features/userSlice';

const requiredInputs = ['firstName', 'lastName', 'email', 'role', 'password', 'confirmPassword'];

const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
};

export default function validateUserFormInputs(
    userForm: UserProfileForm, 
    isCreate: boolean = false 
): UserFormInputValidationErrors {
    console.log('starting form validation', userForm);
    const validationErrors: UserFormInputValidationErrors = {
        clientprofileID: null,
        firstName: null,
        lastName: null,
        email: null,
        role: null,
        permissions: null,
        password: null,
        confirmPassword: null,
    };

    requiredInputs.forEach((key) => {
        let validationMessage = '';
        const value = userForm[key] || '';
        const isEmptyString = value === '';

        switch (key) {
            case 'firstName':
                if (isEmptyString) {
                    validationMessage = 'Kullanıcı adı zorunludur';
                }
                break;
            case 'lastName':
                if (isEmptyString) {
                    validationMessage = 'Soyadı zorunludur';
                }
                break;
            case 'email':
                if (isEmptyString) {
                    validationMessage = 'Email zorunludur';
                } else if (!isValidEmail(value)) {
                    validationMessage = 'Geçerli bir Eposta Adresi giriniz';
                }
                break;
            case 'role':
                if (isEmptyString) {
                    validationMessage = 'Rol zorunludur';
                }
                break;
            case 'password':
                if (isEmptyString && isCreate) {
                    validationMessage = 'Şifre zorunludur';
                }
                break;
            case 'confirmPassword':
                if (isEmptyString && isCreate) {
                    validationMessage = 'Şifre tekrarı zorunludur';
                } else if (value !== userForm.password) {
                    validationMessage = 'Şifreler eşleşmiyor';
                }
                break;
            default:
                break;
        }

        if (validationMessage) {
            validationErrors[key] = validationMessage;
        }
    });

    console.log('validationErrors', validationErrors);
    return validationErrors;
}
