import { ArticleHome } from "components/article/ArticleHome";
import { importMultiMarkdownFileList } from "lib/utils";
import { ArticleAttributes } from "types";
import { PageLayout } from "ui/page/PageLayout";
import { PageSection } from "ui/page/PageSection";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function ArticlePage({ params }: { params: any }) {
  const { lang } = params;
  const articles = await importMultiMarkdownFileList<ArticleAttributes>(`articles`, lang);

  return (
    <div className="article-layout">
      <PageSection>
        <PageLayout layout="left" type="article">
          <ArticleHome lang={lang} articles={articles} />
        </PageLayout>
      </PageSection>
    </div>
  );
}
