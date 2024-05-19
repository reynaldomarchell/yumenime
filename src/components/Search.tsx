"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

import { searchAnime } from "@/lib/amvstrm";
import { SearchTypes } from "@/types";
import { SkeletonSearch } from "./skeleton/skeleton-search";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!open) {
      setSearchQuery("");
      setSearchResults([]);
    }
    if (searchQuery.length > 0) {
      setLoading(true);
      searchAnime(searchQuery)
        .then((data) => {
          setSearchResults(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [searchQuery, open]);

  const filteredResults = searchResults.filter(
    (result: SearchTypes) =>
      (result.format === "TV" ||
        result.format === "MOVIE" ||
        result.format === "OVA" ||
        result.format === "ONA" ||
        result.format === "SPECIAL") &&
      result.status !== "NOT_YET_RELEASED" &&
      result.status !== "CANCELLED",
  );

  function handleCloseDialog() {
    setOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  }
  // console.log(filteredResults);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <FaSearch />
          <p className="hidden md:block">Search anime...</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-[425px]">
        <div className="flex items-center gap-2 border-b py-1 pl-4 pr-10">
          <FaSearch />
          <Input
            placeholder="Search anime..."
            className="border-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="max-h-96 overflow-auto p-2">
          {searchQuery.length === 0 && (
            <div className="flex justify-center py-4">
              <p>Start typing to see the results...</p>
            </div>
          )}
          {loading && <SkeletonSearch />}
          {searchQuery.length > 0 &&
            filteredResults.length === 0 &&
            !loading && (
              <div className="flex justify-center py-4">
                <p>No results found...</p>
              </div>
            )}
          {searchQuery.length > 0 &&
            !loading &&
            filteredResults?.map((result: SearchTypes) => (
              <Link
                href={`/detail/${result.id}`}
                key={result.id}
                onClick={handleCloseDialog}
              >
                <div
                  key={result.id}
                  className="flex items-center gap-2 rounded-md p-2 transition-colors duration-300 ease-in-out hover:bg-gray-700"
                >
                  <Image
                    src={result.coverImage.large}
                    alt={result.title.romaji}
                    width={64}
                    height={96}
                    className="h-24 w-16 rounded-md object-cover"
                  />
                  <div className="text-muted-foreground">
                    <p className="text-sm text-foreground">
                      {result.title.romaji}
                    </p>
                    <p className="text-xs">
                      {result.format} &#9679;{" "}
                      {result.episodes === null ? "TBA" : result.episodes}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
