import { CoverLayout } from "@/components/layout/CoverLayout";
import { B2bForm } from "@/components/shared/B2bForm";
import { B2bFormProgress } from "@/components/shared/B2bFormProgress";
import { useScrollTop, useTranslate } from "@/lib/utils";
import { useState } from "react";

export default function B2b() {
  useScrollTop();
  const [stage, setStage] = useState(1);
  const [success, setSuccess] = useState(false);

  const title = useTranslate("B2B | B2G встречи", "B2B | B2G meetings");

  return (
    <CoverLayout title={title}>
      {!success && stage !== 0 && <B2bFormProgress stage={stage} />}

      <div className="max-w-[808px] md:mx-auto mx-5">
        <B2bForm
          success={success}
          setSuccess={setSuccess}
          stage={stage}
          setStage={setStage}
        />
      </div>
    </CoverLayout>
  );
}
