import CardPostsBlog from '@/components/content/CardPostsBlog';
import SectionContainer from '@/components/utils/SectionContainer';
import { use } from 'react';
import { DataPostsTabNews } from '../../../types/index';

const baseUrl: string = 'https://www.tabnews.com.br/marcocpdti/';

const getData = async (): Promise<Array<DataPostsTabNews>> => {
  const data = await fetch(
    'https://www.tabnews.com.br/api/v1/contents/marcocpdti',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'force-cache',
      next: { tags: ['posts-tabnews'] }
    }
  );
  if (!data.ok) throw new Error(`HTTP error! Status: ${data.status}`);
  const posts = await data.json();

  const response = posts.map((post: DataPostsTabNews) => {
    return {
      id: post.id,
      title: post.title,
      source_url: baseUrl + post.slug,
      created_at: post.created_at
    };
  });

  return response;
};

const Blog = () => {
  const allPosts: Array<DataPostsTabNews> = use(getData());
  return (
    <SectionContainer>
      <div
        className="w-full flex flex-col items-center gap-6"
        style={{ height: '100vh' }}
      >
        {allPosts &&
          allPosts.map(({ id, title, source_url, created_at }) => (
            <div className="w-full" key={id}>
              <CardPostsBlog
                title={title}
                created_at={created_at}
                source_url={source_url}
              />
            </div>
          ))}
      </div>
    </SectionContainer>
  );
};

export default Blog;
