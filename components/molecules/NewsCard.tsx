import { ArrowRight, MessageSquare, Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsCardProps {
  newsId: string;
  thumbnail: string;
  title: string;
  category: string;
  author: string;
  totalComment: number;
}

export default function NewsCard({
  newsId,
  thumbnail,
  title,
  category,
  author = "Admin",
  totalComment,
}: NewsCardProps) {
  return (
    <div className="border-gray-05 flex h-full flex-col rounded-xl border">
      <div className="relative">
        <Image
          src={thumbnail}
          width={424}
          height={324}
          alt="news"
          className="w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <div className="mb-3 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Tag className="text-gray-5 size-4" />
              <p className="text-gray-7 text-small">{category}</p>
            </div>
            <div className="flex items-center gap-1">
              <User className="text-gray-5 size-4" />
              <p className="text-gray-7 text-small">By {author}</p>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="text-gray-5 size-4" />
              <p className="text-gray-7 text-small">{totalComment} comments</p>
            </div>
          </div>
          <p className="text-hard-primary text-large line-clamp-3 font-medium">
            {title}
          </p>
        </div>
        <div className="mt-4 border-t border-gray-100 pt-4">
          <Link href={`/news/${newsId}`} className="flex items-center gap-3">
            <span className="text-primary text-medium font-medium">
              Read More
            </span>
            <ArrowRight className="text-primary size-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
