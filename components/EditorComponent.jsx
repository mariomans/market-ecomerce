'use client';

import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';

const EditorComponent = ({ value, setValue }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    []
  );

  const toolbarOptions = [
    [{ font: [] }],
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    [{ align: [] }],
    ['blockquote', 'code-block'],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme

    ['clean'], // remove formatting button
  ];
  const modules = { toolbar: toolbarOptions };

  return (
    <div>
      <ReactQuill
        modules={modules}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default EditorComponent;

EditorComponent.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func,
};
