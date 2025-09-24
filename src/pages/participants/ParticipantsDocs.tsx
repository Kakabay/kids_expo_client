import useGetDocs from "../../hooks/participants/useGetDocs";
import Loader from "../../components/shared/Loader";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useTranslate } from "@/lib/useTranslate";

export default function ParticipantsDocs() {
  const { docsData, docsIsLoading } = useGetDocs();
  const title = useTranslate("documents");

  return (
    <CoverLayout title={title}>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-x-4 lg:gap-x-5 gap-y-5">
        {docsData &&
          docsData.map((item, i) => (
            <a
              key={i}
              href={item.doc_path}
              target="_blank"
              className="p-2 md:p-4 lg:p-6 text-[15px] leading-[150%] mx-auto w-full rounded-[5px] text-center border-[1px] border-[#DADADA]"
            >
              <img
                src="/assets/icons/participants-docs/doc.svg"
                alt="document"
                className="mb-4 mx-auto"
              />
              <p>{item.title}</p>
            </a>
          ))}
      </div>

      {docsIsLoading && <Loader />}
    </CoverLayout>
  );
}
