import { type Cv } from 'core/src/domain/cv/types';

import { apiClient } from '~/shared/api-client/mod.api-client';

export const api = {
    async create({ data }: { data: OmitStrict<Cv, 'creationDate' | 'id'> }) {
        return apiClient.query<{ ok: boolean; createCvId: string }>({
            url: 'cv/create',
            method: 'POST',
            data,
        });
    },

    async getMany() {
        return apiClient.query<{ ok: boolean; list: Cv[] }>({
            url: 'cv/getMany',
            method: 'GET',
        });
    },
};