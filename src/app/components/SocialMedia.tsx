import { FloatButton } from "@/shared/components/float-button"

export const SocialMedia = () => {
  return (
    <div>
        <FloatButton
            label={'jcguv117'}
            classColor={'bg-gradient-to-r from-cyan-500 to-blue-500'}
            icon='github'
            link={"https://github.com/jcguv117/"}
            />
        <FloatButton
            label={'Carlos Guevara'}
            classColor={'bg-gradient-to-r from-cyan-500 to-blue-500'}
            icon='linkedin'
            link={"https://www.linkedin.com/in/jcarlos-guevara-42044320b/"}
            />
    </div>
  )
}
