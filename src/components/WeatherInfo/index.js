import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteIcon, editIcon } from '../../assets/icons';
import { saveNoteAC, deleteNoteAC, updateNoteAC } from '../../store/header/header.action';
import './index.scss';

const WeatherInfo = ({ data }) => {
    const [inputNotes, setInputNotes] = useState('');
    const dispatch = useDispatch();
    const onChange = ({ target: { value } }) => setInputNotes(value);
    const [editingNoteIndex, setEditingNoteIndex] = useState(null);
    const [editingText, setEditingText] = useState('');
    const onSave = () => {
        dispatch(saveNoteAC({ note: inputNotes, name: data.name }));
        setInputNotes('');
    };
    const onEdit = (index, note) => {
        setEditingNoteIndex(index);
        setEditingText(note);
    };
    const onDelete = (index, note) => dispatch(deleteNoteAC({ index, name: data.name, note }));

    const editingNoteValueChange = ({ target: { value } }) => setEditingText(value);

    const onUpdateNode = () => {
        dispatch(updateNoteAC({ name: data.name, note: editingText, index: editingNoteIndex }));
        setEditingNoteIndex(null);
    };
    return (
        <div className="weatherInfo">
            <div className="weather">
                <div className="content">
                    <span className="title">Region</span>
                    <span className="subTitle">{data.region}</span>
                </div>
                <div className="content">
                    <span className="title">Time Observed</span>
                    <span className="subTitle">{data.observation_time}</span>
                </div>
                <div className="content">
                    <span className="title">Time Zone</span>
                    <span className="subTitle">{data.timezone_id}</span>
                </div>
                <div className="content">
                    <span className="title">Wind</span>
                    <span className="subTitle">{data.wind_speed} {data.wind_dir} {data.wind_degree}&#176;</span>
                </div>
                <div className="content">
                    <span className="title">Weather</span>
                    <span className="subTitle">{data.weather_descriptions}</span>
                </div>
                <div className="content">
                    <span className="title">Pressure</span>
                    <span className="subTitle">{data.pressure} Pa</span>
                </div>
                <div className="content">
                    <span className="title">Visibility</span>
                    <span className="subTitle">{data.visibility}</span>
                </div>
                <div className="content">
                    <span className="title">Longitude</span>
                    <span className="subTitle">{data.lon}</span>
                </div>
                <div className="content">
                    <span className="title">Latitude</span>
                    <span className="subTitle">{data.lat}</span>
                </div>
            </div>

            <div className="notes">
                <Notes
                    onEdit={onEdit}
                    onDelete={onDelete}
                    notes={data.notes}
                    editingNoteIndex={editingNoteIndex}
                    editingNoteValueChange={editingNoteValueChange}
                    onUpdateNode={onUpdateNode}
                    editingText={editingText}
                />
                <div className="text-area">
                    <textarea value={inputNotes} className="textArea" rows="4" onChange={onChange} />
                    <div className="button">
                        <button onClick={onSave}>Save</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

const Notes = ({ notes, onDelete, onEdit, editingNoteIndex, editingNoteValueChange, onUpdateNode, editingText }) => {
    if (!notes) return <div className="note_empty">Start your first note now</div>;
    if (!notes.length) return <div className="note_empty">No note available</div>;

    return notes.map((note, i) => <div className="note" key={i}>
        {editingNoteIndex === null && <div className="action">
            <div onClick={() => onEdit(i, note.note)} className="edit">
                <img height="15" src={editIcon} />
            </div>
            <div onClick={() => onDelete(i, note)} className="delete"><img height="15" src={deleteIcon} /></div>
        </div>}
        <div className="text">
            {editingNoteIndex === i ?
                <div className="editing">
                    <textarea onChange={editingNoteValueChange} value={editingText} />
                    <button onClick={onUpdateNode} className="button">Update</button>
                </div>
                : note.note}
            {editingNoteIndex === null &&
                <p>
                    {moment(note.time).fromNow()}
                </p>}
        </div>
    </div >);
};

Notes.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            length: PropTypes.any,
            map: PropTypes.func
        })
    ),
    onDelete: PropTypes.func,
    editingText: PropTypes.string,
    onEdit: PropTypes.func,
    editingNoteValueChange: PropTypes.func,
    onUpdateNode: PropTypes.func,
    editingNoteIndex: PropTypes.any,
};

WeatherInfo.propTypes = {
    data: PropTypes.any
};

export default WeatherInfo;
