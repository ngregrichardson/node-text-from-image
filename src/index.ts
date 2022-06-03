import { createWorker, ImageLike, OEM, PSM } from "tesseract.js";

const getTextFromImage = async (
    image: ImageLike,
    oem: OEM = OEM.DEFAULT,
    psm: PSM = PSM.AUTO,
    languages: string = "eng+osd",
): Promise<string | null> => {
    const worker = createWorker();

    await worker.load();
    await worker.loadLanguage(languages);
    await worker.initialize(languages);
    await worker.setParameters({
        tessedit_ocr_engine_mode: oem,
        tessedit_pageseg_mode: psm,
    });

    const {
        data: { text },
    } = await worker.recognize(image);

    return text;
};

export default getTextFromImage;
