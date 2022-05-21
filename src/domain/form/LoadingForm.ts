import type {UploadFile} from "ant-design-vue";

interface LoadingForm {
    domain: string;
    start: string;
    finish: string;
    file?: Array<UploadFile>;
}

export type {LoadingForm};