import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { getSongs } from '../../utils/data/songsData';

const SongListPage = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs(1).then(setSongs)
    }, []);

    return (
        <Container>
            <h1>Song List</h1>
            {songs.length === 0 ? (
                <p>No songs found.</p>
            ) : (
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Artist ID</th>
                            <th>Album</th>
                            <th>Length</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song) => (
                            <tr key={song.id}>
                                <td>{song.id}</td>
                                <td>{song.title}</td>
                                <td>{song.artist_id}</td>
                                <td>{song.album}</td>
                                <td>{song.length}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default SongListPage;
