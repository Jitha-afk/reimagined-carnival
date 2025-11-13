import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { currentlyReading, completedBooks } from "@/lib/books-data"
import { cn } from "@/lib/utils"

export default function BooksPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold mb-4">My Reading Library</h2>
        <p className="text-xl text-muted-foreground">A collection of books I&apos;m reading and have completed</p>
      </section>

      <section className="space-y-8">
        <h3 className="text-3xl font-semibold border-b-4 border-primary inline-block pb-2">
          Currently Reading
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentlyReading.map((book) => (
            <Card key={book.id} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-2">
              <div className={cn(
                "h-48 flex items-center justify-center text-white text-5xl bg-gradient-to-br",
                book.gradient
              )}>
                <span className="drop-shadow-lg">{book.icon}</span>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h4 className="text-xl font-semibold mb-1">{book.title}</h4>
                  <p className="text-sm text-muted-foreground italic mb-3">by {book.author}</p>
                  <p className="text-sm leading-relaxed">{book.description}</p>
                </div>
                {book.progress && (
                  <div className="space-y-2">
                    <Progress value={book.progress} className="h-2" />
                    <p className="text-sm text-muted-foreground">{book.progress}% complete</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h3 className="text-3xl font-semibold border-b-4 border-primary inline-block pb-2">
          Completed Books
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-2">
              <div className={cn(
                "h-48 flex items-center justify-center text-white text-5xl bg-gradient-to-br",
                book.gradient
              )}>
                <span className="drop-shadow-lg">{book.icon}</span>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h4 className="text-xl font-semibold mb-1">{book.title}</h4>
                  <p className="text-sm text-muted-foreground italic mb-3">by {book.author}</p>
                  <p className="text-sm leading-relaxed">{book.description}</p>
                </div>
                {book.completedDate && (
                  <CardFooter className="px-0 pt-4 border-t">
                    <p className="text-sm text-muted-foreground">Completed: {book.completedDate}</p>
                  </CardFooter>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
