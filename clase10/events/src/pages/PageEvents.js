import { useEffect } from "react"

let title = document.title

const PageEvents = () => {

    useEffect(() => {
        const leavePage = () => {
            document.title = 'No te vayas ... !!'
        }

        const backToPage = () => {
            document.title = title
        }

        window.addEventListener('blur', leavePage)
        window.addEventListener('focus', backToPage)

        return () => {
            window.removeEventListener('blur', leavePage)
            window.removeEventListener('focus', backToPage)
        }
    }, [])

    return (
        <section className="max-w-5xl m-auto">
            <h1 className="text-center text-4xl font-bold">Page Events</h1>
        </section>
    )
}

export default PageEvents