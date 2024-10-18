import {useState} from 'react';
import {useDispatch} from 'react-redux';
import * as Dialog from '@radix-ui/react-dialog';
import styles from '../../styles/AddPostModal.module.scss';
import {addPost} from "../../entities/posts/module/addPost/addPost.tsx";

interface AddPostModalProps {
    onClose: () => void;
}

const AddPostModal: React.FC<AddPostModalProps> = ({onClose}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await dispatch(addPost({title, body}));
            console.log({title, body}, 'Submit');
        } catch (error) {
            console.error('Error adding post:', error);
        } finally {
            onClose();
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.modalForm}>
            <input
                className={styles.input}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <textarea
                className={styles.textarea}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Body"
                required
            />
            <div className={styles.buttonsContainer}>
                <button className={styles.submitButton} type="submit">
                    Add Post
                </button>
                <Dialog.Close asChild>
                    <button className={styles.closeButton} type="button">Close</button>
                </Dialog.Close>
            </div>
        </form>
    );
};

export default AddPostModal;
