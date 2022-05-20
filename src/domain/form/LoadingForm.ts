import type {UploadFile} from "ant-design-vue";

interface LoadingForm {
    start: string;
    finish: string;
    file?: Array<UploadFile>;
}

export type {LoadingForm};