import * as yup from 'yup'

export const AddressSchema = yup.object().shape({
    flat : yup.string().required(),
    building : yup.string().required(),
    LandMark : yup.string().optional(),
    area : yup.string().required(),
    type : yup.string().required(),
    isdefault : yup.boolean().optional()
})