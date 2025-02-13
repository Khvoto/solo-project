/* 'use client'

import { tmdb } from "@/api/tmdb/tmdb";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState, useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { addMovie } from "@/app/actions/movie";

export default function AddMovie () {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [message, action, isPending] = useActionState(addMovie, null)

  const handleTitleChange = (event) => {
    event.preventDefault()
    setTitle(event.target.value)
  }

  useEffect(() => {
    if(message?.success) {
      setOpen (!message?.success)
      toast({
        title: "Success!",
        description: message?.message
      })
    } else {
      toast ({
        title: "Error!",
        variant: 'destructive',
        description: message?.message
      })
    }
  }, [message]);
  return (
    <Dialog open={open}  onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Movie</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>
          <DialogHeader>
            <DialogTitle>Add movie</DialogTitle>
            <DialogDescription>
              Enter Information for the movie you wish to add.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input type="text" id="title" value={title} placeholder="Enter title" className="col-span-3" onChange={handleTitleChange}/>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isPending} className="">
              {isPending? (
                <>
                  Fething movie/s...
                  <LoaderCircle className="animate-spin w-4 h-4"/>
                </>
              ):(
                "Fetch"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
} */

'use client'

import { addMovie } from "@/app/actions/movie"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import { BookPlus, LoaderCircle } from "lucide-react"
import { useActionState, useEffect, useState } from "react"

export function AddMovie() {
  const [open, setOpen] = useState(false)
  const [message, action, isPending] = useActionState(addMovie, null)

  useEffect(() => {
    if(message?.success) {
      setOpen (!message?.success)
      console.log(message.message)
      toast({
        title: "Success!",
        description: message?.message
      })
    } else {
      toast ({
        title: "Error!",
        variant: 'destructive',
        description: message?.message
      })
    }
  }, [message]);


  return (
    <Dialog open={open}  onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-slate-700 text-white"><BookPlus/> Add new book</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>
          <DialogHeader >
            <DialogTitle>Add new book</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Book title"
                className="col-span-3"
                disabled={isPending}
                type="string"
              />
              {/* {error? <p className="col-span-4 text-center">error message</p>} */}
{/*               <Label htmlFor="author" className="text-right">Author</Label>
              <Input
                id="author"
                name="author"
                placeholder="Author name"
                className="col-span-3"
                disabled={isPending}
                type="string"
              />
              <Label htmlFor="published" className="text-right">Release date</Label>
              <Input
                id="published"
                name="published"
                placeholder="Release date"
                className="col-span-3"
                disabled={isPending}
                type="Date"
              />
              <Label htmlFor="isbn" className="text-right">ISBN</Label>
              <Input
                id="isbn"
                name="isbn"
                placeholder="ISBN-13 format"
                className="col-span-3"
                disabled={isPending}
                type="number"
              /> */}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isPending} className="">
              {isPending? (
                <>
                  Adding book...
                  <LoaderCircle className="animate-spin w-4 h-4"/>
                </>
              ):(
                "Add book"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>  )}