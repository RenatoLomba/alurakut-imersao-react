import { Community } from '../models/community';
import { ProfileRelation } from '../models/profile-relation';

const readonlyToken = process.env.NEXT_PUBLIC_READONLY_TOKEN;

export class Api {
  async getRelationsData(
    github: string,
    relation: 'followers' | 'following',
  ): Promise<ProfileRelation[]> {
    const response = await fetch(
      `https://api.github.com/users/${github}/${relation}`,
    );
    if (!response.ok) throw new Error(response.statusText);
    const json = await response.json();
    const data: ProfileRelation[] = json.map((item: any) => {
      return {
        id: item.id,
        imgUrl: item.avatar_url,
        title: item.login,
      };
    });
    return data;
  }

  async getCommunitiesGraphQL(): Promise<Community[]> {
    const response = await fetch(`https://graphql.datocms.com/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + readonlyToken,
      },
      body: JSON.stringify({
        query: 'query { allCommunities { id, title, imgUrl, creatorSlug } }',
      }),
    });
    if (!response.ok) throw new Error(response.statusText);
    const json = await response.json();
    return json.data.allCommunities;
  }

  async createCommunity(community: {
    title: string;
    imgUrl: string;
    creatorSlug: string;
  }): Promise<Community> {
    const response = await fetch('/api/community', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(community),
    });
    const json = await response.json();
    return json.data;
  }
}
