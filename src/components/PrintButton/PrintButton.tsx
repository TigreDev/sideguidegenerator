import { toPng } from 'html-to-image';
import { Button } from '../Button';
export const PrintButton = ({ ...props }: React.ComponentProps<'button'>) => {

    const handleDownloadImage = () => {
        const element = document.getElementById('print');
        if (element === null) {
            return
        }

        toPng(element, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-image-name.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return <Button className={props.className} {...props} onClick={handleDownloadImage}>Download</Button>
}