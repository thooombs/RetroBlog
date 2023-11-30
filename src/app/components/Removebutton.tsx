
'use client'
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


interface RemoveBtnProps {
    id: string;
  }

export default function RemoveBtn({ id }: RemoveBtnProps) {
  const router = useRouter();
  const { data: session } = useSession();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`/api/deletePost`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id }),
      });

      if (res.ok) {
        router.push('/');
        router.refresh()
      }
    }
  };

  return (
 

    session ? (
        <button onClick={removeTopic} className="text-red-400">
          DELETE
        </button>
      ) : (
        <></>
        )
        );
      }