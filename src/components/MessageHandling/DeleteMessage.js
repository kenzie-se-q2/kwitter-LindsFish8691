import React from 'react';
import {DELETE_MESSAGE, useStore} from '../../store/store.js';
import {deleteMessage} from '../../fetchRequests.js';

const DeleteMessage = (props) => {
    const user = useStore((state) => state.user)
    const [formData, setFormData] = useState({
     text: ""
   });
}