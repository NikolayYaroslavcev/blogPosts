import * as Dialog from '@radix-ui/react-dialog';
import AddPostModal from '../../components/modal/AddPostModal.tsx';
import styles from '../../page/home/App.module.scss';




export const ModalWrap = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className={styles.addPostButton}>Add Post</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.dialogOverlay}/>
                <Dialog.Content className={styles.dialogContent}>
                    <Dialog.Title className={styles.dialogTitle}>Add New Post</Dialog.Title>
                    <Dialog.Description className={styles.dialogDescription}>
                        Fill in the form below to create a new post.
                    </Dialog.Description>
                    <AddPostModal onClose={() => {
                    }}/>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )

}
