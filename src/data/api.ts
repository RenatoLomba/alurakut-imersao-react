import { ProfileRelation } from '../models/profile-relation';

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
}
