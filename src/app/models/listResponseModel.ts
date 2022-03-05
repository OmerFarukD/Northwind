import { ResponseModel } from './../../../../RentCarProjectFrontEnd/src/app/models/responseModel';
export interface ListResponseModel<Type> extends ResponseModel{
data:Type[];
}