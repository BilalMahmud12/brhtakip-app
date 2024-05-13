import React from 'react';
import type { Request } from '@/API';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    request?: Request;
    onSubmit?: (data: Request) => void;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const { 
        //isCreate = false, 
        request, 
        //onSubmit = () => { }, 
    } = props;

    return (
        <div>
            <form>
                {/* Form fields that utilize request data */}
                <div>
                    this is a form
                    Request Number: {request?.request_number}
                    {/* Add other input fields as needed */}
                </div>
                {/* Submit button or other form controls */}
            </form>
        </div>
    );
}

export default CreateOrUpdateForm;