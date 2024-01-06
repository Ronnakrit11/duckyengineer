import { styles } from "@/app/styles/style";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import React, { FC, useEffect, useState } from "react";
import Editor from "../../Editor";
import { useCreateBlogMutation, useEditBlogMutation } from "@/redux/features/blog/blogsApi";
import ImageIcon from "@mui/icons-material/Image";
import toast from "react-hot-toast";
import SimpleBackdrop from "../../Loading/SimpleBackdrop";
import { useCreateKnowledgeMutation, useEditKnowledgeMutation } from "@/redux/features/knowledge/knowledgeApi";
import { useRouter } from 'next/navigation'

type Props = {
  knowledgeData?: any;
  refetch?: any
};

const KnowledgeInfomation: FC<Props> = ({
  knowledgeData,
  refetch,
}) => {
  const [dragging, setDragging] = useState(false);
  const [blogInfo, setBlogInfo] = useState<any>({});
  const router = useRouter()
  const [createKnowledge, { isLoading, isSuccess, error }] = useCreateKnowledgeMutation()
  const [editKnowledge, { isLoading: isLoadingEdit, isSuccess: successEdit, error: errorEdit }]: any = useEditKnowledgeMutation({})


  const [fileImg, setFileImg] = useState(null) as any;

  useEffect(() => {
    if (isSuccess) {
      toast.success('create knowledge success');
      router.push('/admin/knowledge')
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [isSuccess])

  useEffect(() => {
    if (successEdit) {
      toast.success('update knowledge success');
    }
    if (error) {
      if ("data" in errorEdit) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [successEdit])


  useEffect(() => {
    if (knowledgeData) {
      const { result } = knowledgeData
      const newState = {
        description: result.description,
        thumbnail: result.thumbnail,
        title: result.title,
        link: result.link
      }
      setBlogInfo(newState);
    }
  }, [knowledgeData]);

  const validateInput = () =>{
    let isError = false
    if(!blogInfo.description){
      alert('Description is required!')
      isError= true
    }
    if(!blogInfo.title){
      alert('Title is required!')
      isError= true
    }
    if(!blogInfo.link){
      alert('Link is required!')
      isError= true
    }

    if((knowledgeData?.result && !blogInfo?.thumbnail?.url)){
      alert('Image thumbnail is required!')
      isError= true
    }

    if((!knowledgeData?.result && !fileImg)){
      alert('Image thumbnail is required!')
      isError= true
    }

    return isError
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if(validateInput()){
      return
    }

    if (knowledgeData) {
      await editKnowledge({ id: knowledgeData.result._id, data: { ...blogInfo, fileImg } });
      //  await refetch()
    } else {
      createKnowledge({ ...blogInfo, fileImg })
    }

  };

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          // setBlogInfo({ ...blogInfo, fileImg: reader.result });
          setFileImg(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        // setBlogInfo({ ...blogInfo, fileImg: reader.result });
        setFileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[80%] m-auto mt-24">
      <form onSubmit={handleSubmit} className={`${styles.label}`}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="title"
            name=""
            required
            value={blogInfo.title}
            onChange={(e: any) =>
              setBlogInfo({ ...blogInfo, title: e.target.value })
            }
            onBlur={(e) => {
            }}
            id="title"
            placeholder="MERN stack LMS platform with next 13"
            className={`
            ${styles.input}`}
          />
        </div>
        <br />
        <div className="mb-1">
          <label className={`${styles.label}`}>Description</label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={2}
            required
            placeholder="Write something amazing..."
            className={`${styles.input} !h-min !py-2`}
            value={blogInfo.description}
            onChange={(e: any) =>
              setBlogInfo({ ...blogInfo, description: e.target.value })
            }
          ></textarea>
        </div>
        <br />
        <div>
          <label htmlFor="">Link</label>
          <input
            type="slug"
            name=""
            required
            value={blogInfo.link}
            onChange={(e: any) =>
              setBlogInfo({ ...blogInfo, link: e.target.value })
            }
            id="slug"
            placeholder="https://www.youtube.com/watch?v=47El..."
            className={`
            ${styles.input}`}
          />
        </div>
        <br />
        <div className="w-full">
          <input
            type="file"
            accept="image/*"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className={`w-full min-h-[10vh] dark:border-white border-[#00000026] p-3 border flex items-center justify-center ${dragging ? "bg-blue-500" : "bg-transparent"
              }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {blogInfo?.thumbnail?.url || fileImg ? (
              <img
                src={fileImg || blogInfo?.thumbnail?.url}
                alt=""
                className="max-h-full w-full object-cover"
              />
            ) : (
              <span className="text-black dark:text-white">
                <ImageIcon /> Drag and drop your thumbnail here or
                click to browse
              </span>
            )}
          </label>
        </div>
        <br />
        <div className="w-full flex items-center justify-center">
          <input
            type="submit"
            value="Save"
            className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          />
        </div>
        <br />
      </form>
      <SimpleBackdrop open={isLoading || isLoadingEdit} setOpen={() => { }} />
    </div>
  );
};

export default KnowledgeInfomation;
