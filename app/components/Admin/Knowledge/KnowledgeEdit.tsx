"use client"
import { useGetBlogContentByIdQuery, useGetBlogContentQuery } from '@/redux/features/blog/blogsApi';
import React from 'react'
import BlogInformation from './KnowledgeInfomation';
import KnowledgeInfomation from './KnowledgeInfomation';
import { useGetKnowledgeContentByIdQuery } from '@/redux/features/knowledge/knowledgeApi';

const KnowledgeEdit = ({ id }) => {
    const { data: knowledgeData, isLoading, refetch } = useGetKnowledgeContentByIdQuery(id, { refetchOnMountOrArgChange: true });

    return <KnowledgeInfomation knowledgeData={knowledgeData} refetch={refetch} />
}

export default KnowledgeEdit