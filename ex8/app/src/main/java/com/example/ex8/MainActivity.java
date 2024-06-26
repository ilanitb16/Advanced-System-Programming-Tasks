package com.example.ex8;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import androidx.navigation.ui.AppBarConfiguration;
import com.example.ex8.databinding.ActivityMainBinding;
import android.widget.ListView;
import android.widget.ArrayAdapter;

import java.util.ArrayList;
import java.util.List;

import androidx.room.Room;

public class MainActivity extends AppCompatActivity {

    private AppBarConfiguration appBarConfiguration;
    private ActivityMainBinding binding;

    private AppDB db;
    private ListView lvPosts;
    private List<String> posts;
    private List<Post> dbPosts;
    private ArrayAdapter<String> adapter;
    private PostDao postDao;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());
        db = Room.databaseBuilder(getApplicationContext(), AppDB.class, "FooDB").allowMainThreadQueries().build();
        postDao = db.postDao();

        handlePosts();

        binding.btnAdd.setOnClickListener(view -> {
            Intent intent = new Intent(this, FormActivity.class);
            startActivity(intent);
        });
    }

    @Override
    protected void onResume() {
        super.onResume();
        loadPosts();
    }

    private void handlePosts() {
        lvPosts = binding.lvPosts;
        posts = new ArrayList<>();
        adapter = new ArrayAdapter<>(this,android.R.layout.simple_list_item_1,posts);
        loadPosts();
        lvPosts.setAdapter(adapter);
        lvPosts.setOnItemClickListener((adapterView, view, i, l) -> {
            Intent intent = new Intent(this, FormActivity.class);
            intent.putExtra("id", dbPosts.get(i).getId());
            startActivity(intent);
        });
        lvPosts.setOnItemLongClickListener((adapterView, view, i, l) -> {
            posts.remove(i);
            Post post = dbPosts.remove(i);
            postDao.delete(post);
            adapter.notifyDataSetChanged();
            return true;
        });
    }

    private void loadPosts() {
        posts.clear();
        dbPosts = postDao.index();

        for (Post post : dbPosts){
            posts.add(post.getId() + "," + post.getContent());
        }
        //adapter.notifyDataSetChanged();
    }
}